export class EdarErr extends Error {
  status: number;
  msg: string;
  constructor({ status, msg }: Constructor) {
    super();
    this.name = "EdarErr";
    this.status = status;
    this.msg = msg || "Algo salió mal 🥲.";
  }
}

type Constructor = {
  status: number;
  msg?: string;
};
