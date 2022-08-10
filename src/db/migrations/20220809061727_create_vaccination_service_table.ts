import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('vaccination_service', (table)=>{
        table.increments('id');
        table.string('service_name');
        table.string('site_location');
        table.date('start_date').notNullable();
        table.date('end_date').notNullable();
        table.integer("number_of_doses").notNullable();
        table.enu("gender", ["male", "female", "both"]).notNullable();
        table.enu("ethnicity", ['asian', 'american', 'african', 'pacific']);
        table.integer("min_age")

    })

}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('vaccination_service');
}

