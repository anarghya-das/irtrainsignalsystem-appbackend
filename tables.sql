CREATE TABLE signals (
    id SERIAL PRIMARY KEY,
    signalid TEXT NOT NULL,
    latitude REAL,
    longitude REAL
);

CREATE TABLE devicelocations (
    id SERIAL PRIMARY KEY,
    deviceid TEXT,
    trackname TEXT,
    phone INT,
    trainno INT,
    latitude REAL,
    longitude REAL
);
