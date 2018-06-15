CREATE TABLE signals (
    id SERIAL PRIMARY KEY,
    signalid TEXT NOT NULL,
    latitude REAL,
    longitude REAL
);

CREATE TABLE devices (
    id SERIAL PRIMARY KEY,
    deviceid TEXT NOT NULL,
    info TEXT,
    latitude REAL,
    longitude REAL
);

