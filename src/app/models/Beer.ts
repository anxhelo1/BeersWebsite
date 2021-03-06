export class Beer {
  public id: string;
  public name: string;
  public nameDisplay: string;
  public description: string;
  public isOrganic: string;
  public statusDisplay: string;
  public glass: {
    name: string;
    createDate: string;
  };
  public style: {
    name: string;
    description: string;
    createDate: string;
    updateDate: string;
  };
  category: {
    name: string;
    description: string;
  };
  labels: {
    icon: string;
    medium: string;
    large: string;
  }

}
