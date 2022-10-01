CREATE DATABASE company

CREATE TABLE companyRecords(
  id SERIAL PRIMARY KEY,
  cin VARCHAR(255),
  company_name VARCHAR(255),
  date_of_registration VARCHAR(255),
  month_name VARCHAR(255),
  state VARCHAR(255),
  roc VARCHAR(255),
  company_status VARCHAR(255),
  category VARCHAR(255),
  class VARCHAR(255),
  company_type VARCHAR(255),
  authorized_capital VARCHAR(255),
  paidup_capital VARCHAR(255),
  activity_code VARCHAR(255),
  activity_description VARCHAR(255),
  registered_office_address VARCHAR(255),
  email VARCHAR(255)
);
