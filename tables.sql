CREATE TABLE signals (
    id SERIAL PRIMARY KEY,
    signalid TEXT NOT NULL,
    latitude DECIMAL PRECISION,
    longitude DECIMAL PRECISION
);

CREATE TABLE devicelocations (
    id SERIAL PRIMARY KEY,
    deviceid TEXT,
    trainname TEXT,
    trackname TEXT,
    phone BIGINT,
    trainno INT,
    latitude DECIMAL PRECISION,
    longitude DECIMAL PRECISION
);
