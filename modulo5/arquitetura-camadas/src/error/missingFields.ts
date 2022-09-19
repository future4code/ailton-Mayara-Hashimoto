import { Base } from "./baseError";

export class MissingFields extends Base {
    constructor() {
        super("Missing fields", 404)
    }
}