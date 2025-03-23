

CREATE TABLE Building (
    building_id SERIAL PRIMARY KEY,
    building_name VARCHAR(10),
    total_floors INT  CHECK (total_floors > 0),
    total_lifts INT CHECK (total_lifts > 0) DEFAULT 1
);


CREATE TABLE Floor (
    floor_id SERIAL PRIMARY KEY,  
    floor_number INT,
  building_id INT REFERENCES Building(building_id) ON DELETE CASCADE
);


CREATE TABLE Lift (
    lift_id SERIAL PRIMARY KEY,  
    current_floor INT NOT NULL DEFAULT 0,
    direction VARCHAR(10),
    status VARCHAR CHECK (status IN ('ACTIVE', 'INACTIVE', 'MAINTENANCE')),
    capacity INT,
    destination_floor INT ,
    lift_building_id INT REFERENCES Building(building_id) ON DELETE CASCADE,
   lift_destination_floor INT REFERENCES Floor(floor_id) ON DELETE CASCADE
);

CREATE TABLE Request (
    request_id SERIAL PRIMARY KEY, 
    floor_id INT,
    lift_id INT ,
    direction VARCHAR ,
    status VARCHAR CHECK (status IN ('PENDING', 'COMPLETED', 'CANCELLED')),
   request_floor_id INT REFERENCES Floor(floor_id) ON DELETE CASCADE,
    request_lift_id INT REFERENCES Lift(lift_id) ON DELETE CASCADE
);


-- INSERT DATA INTO TABLES

INSERT INTO Building (building_name, total_floors, total_lifts) VALUES ('Building 1', 10, 3);
INSERT INTO Building (building_name, total_floors, total_lifts) VALUES ('Building 2', 15, 4);
INSERT INTO Building (building_name, total_floors, total_lifts) VALUES('Building 3', 10, 4);


INSERT INTO Floor (building_id, floor_number) VALUES (1, 0);
INSERT INTO Floor (building_id, floor_number) VALUES (1, 1);
INSERT INTO Floor (building_id, floor_number) VALUES(2, 2);
INSERT INTO Floor (building_id, floor_number) VALUES (3, 5);


INSERT INTO Lift (current_floor, direction, status, capacity, destination_floor) VALUES (1, 'UP', 'ACTIVE', 7, 5);
INSERT INTO Lift (current_floor, direction, status, capacity, destination_floor) VALUES  (4, 'UP', 'ACTIVE', 15, 3);
INSERT INTO Lift (current_floor, direction, status, capacity, destination_floor) VALUES  (2, 'DOWN','INACTIVE', 20, 3);
	
	
INSERT INTO Request (floor_id, lift_id, direction, status) VALUES (2, 2, 'UP', 'COMPLETED');
INSERT INTO Request (floor_id, lift_id, direction, status) VALUES (3, 1, 'DOWN', 'PENDING');
INSERT INTO Request (floor_id, lift_id, direction, status) VALUES (1, 1, 'UP', 'PENDING');
	
	
-- getting data of each table 
SELECT * FROM Building
SELECT * FROM Floor
SELECT * FROM Lift
SELECT * FROM Request

--Q1 retriving the list of lifts whose destination floor is 5
SELECT * FROM Lift WHERE destination_floor = 5;


-- Q2 get the details of lift which is currently active and moving up :
SELECT * FROM Lift WHERE status = 'ACTIVE' AND direction = 'UP';

-- Q3 update lift status :
UPDATE Lift SET status = 'INACTIVE' WHERE lift_id = 3;
SELECT * FROM Lift

-- Q4 delete request where request id is 1
DELETE FROM Request WHERE request_id = 1;
SELECT * FROM Request

-- Q5 get list of floors where floor number is greater than 4
SELECT * FROM Floor WHERE floor_number > 4;

-- Q6 get all lift requests with floor, building details

SELECT Req.request_id, Build.building_name, Fl.floor_number, Li.lift_id, Req.status 
FROM Request Req
JOIN Floor fl ON Req.floor_id = Fl.floor_id
JOIN Lift Li ON Req.lift_id = Li.lift_id
JOIN Building Build ON Fl.building_id = Build.building_id;




