export class Video {
  constructor(
    public id: number,
    public name: string,
    public url: string,
    public top?: boolean,
    public desc?: string
  ) { }
}
