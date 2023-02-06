interface Teacher {
  readonly const firstName: string,
  readonly const lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience: number,
  location: string,
  [propName: string]: any
}
