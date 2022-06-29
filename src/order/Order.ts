import { DateTime } from "../calendar/DateTime";
import { Waitron } from "../human/staff/Waitron";
import { Table } from "../Room/diningRoom/table/Table";
import { Vituals } from "../victuals/Victuals";

export class Order {
    private date : DateTime;
    private table : Table;
    private victuals : Vituals[]=[];
    private waitron: Waitron
}