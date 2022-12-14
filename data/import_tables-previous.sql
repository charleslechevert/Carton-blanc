

BEGIN;

DROP TABLE IF EXISTS "player", 
"penalty",
"team",
"register";

CREATE TABLE IF NOT EXISTS "team"(
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, 
  "full_name" TEXT NOT NULL,
  "short_name" TEXT NOT NULL,
  "admin_password" TEXT NOT NULL,
  "target" TEXT NOT NULL,
  "active" BOOLEAN NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW()
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "player"(
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, 
  "fname" TEXT NOT NULL,
  "lname" TEXT NOT NULL,
  "pseudo" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "active" BOOLEAN NOT NULL,
  "team_id" INTEGER NOT NULL REFERENCES "team"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW()
  "updated_at" TIMESTAMPTZ
);
CREATE TABLE IF NOT EXISTS "penalty"(
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, 
  "type" TEXT NOT NULL,
  "amount" INTEGER NOT NULL,  
  "active" BOOLEAN NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW()
  "updated_at" TIMESTAMPTZ
);


CREATE TABLE IF NOT EXISTS "register"(
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, 
  "date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "paid_status" BOOLEAN NOT NULL, 
  "active" BOOLEAN NOT NULL,
  "penalty_id" INTEGER NOT NULL REFERENCES "penalty"("id"), 
  "player_id" INTEGER NOT NULL REFERENCES "player"("id"),
  "descr" TEXT,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  "updated_at" TIMESTAMPTZ
);


COMMIT;
