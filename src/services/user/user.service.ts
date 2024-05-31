import CoreService from "../../cores/core.service";
import { User, UserSummaryReponse } from "./user.interface";

interface GetUsersInterface {
  users: User[];
  total: number;
}

interface UserSummary {
  [key: string]: {
    female: number;
    male: number;
    ageRange: number[];
    hair: { [key: string]: number };
    addressUser: { [key: string]: string };
  };
}

class UserService extends CoreService {
  public getUsers(): Promise<GetUsersInterface> {
    return this.get<GetUsersInterface>("users");
  }
  public getSummayDepartment(users: User[]): UserSummaryReponse {
    const groups = users?.reduce((group: UserSummary, user: User) => {
      const { gender, age, hair, address, firstName, lastName, company } = user;
      const department = company.department;
      let summary = group[department] || {
        female: 0,
        male: 0,
        ageRange: [],
        hair: {},
        addressUser: {},
      };
      summary[gender] += 1;
      summary.ageRange = [
        Math.min(...summary.ageRange, age),
        Math.max(...summary.ageRange, age),
      ];
      summary.hair[hair.color] = summary.hair[hair.color] || 0 + 1;
      summary.addressUser[`${firstName}${lastName}`] = address.postalCode;
      group[department] = summary;
      return group;
    }, {});

    return Object.entries(groups).reduce(
      (acc: UserSummaryReponse, [department, summary]) => {
        acc[department] = { ...summary, ageRange: summary.ageRange.join("-") };
        return acc;
      },
      {}
    );
  }
}

export { UserService };
