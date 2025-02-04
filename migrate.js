import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const con = await mysql.createConnection({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_DATABASE,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD
});
function droptables(con){
    const sql = `DROP TABLE IF EXISTS tickets,admin,uzenetek,valasz`;
    con.query(sql);
}

function createUzenetekTabel(con){
    const sql = `CREATE TABLE IF NOT EXISTS uzenetek (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    uzenet TEXT NOT NULL,
    userId VARCHAR(36) NOT NULL,
    adminId VARCHAR(36) not null ,
    cim VARCHAR(255) not null,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (adminId) REFERENCES admin(id))`;
    con.query(sql);
};
function createAdminTabel(con){
    const sql = `CREATE TABLE IF NOT EXISTS admin (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()))`;
    con.query(sql);
};

function createValaszTabel(con){
    const sql = `CREATE TABLE IF NOT EXISTS valasz (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    uzenetId VARCHAR(36) NOT NULL,
    valasz TEXT NOT NULL,
    adminId VARCHAR(36) not null,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (adminId) REFERENCES admin(id),
    foreign key (uzenetId) references uzenetek(id))`;
    con.query(sql);
}

function migrate(){
    droptables(con);
    createAdminTabel(con);
    createUzenetekTabel(con);
    createValaszTabel(con);
};
migrate();

