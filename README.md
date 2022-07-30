# Server Template
Express Router with raw Postgresql queries

TODO:
	- Create shell script to seed table automatically
	- Use body-parser properly for handling requests
	- Create tests and logging
	- Research how to use blobs (large objects) in postgresql
 	- Research proper cors implementation for production

May be a problem:
	- The timestamp when creating the tables should work, need to test and verify later.




How to use:
I'm a huge fan of cli, i'd recommend setting up alias' they will save you time.

write the following in .bashrc (you'll need to exit and ssh back into the server):
alias psql='psql -U postgres -d postgres'

Create the tables:
	psql -U postgres -d postgres -c "\i ‘./create_tables.sql’"

Drop 'postgres' database for fresh start:
	psql -U postgres -d postgres -c "CREATE DATABASE test"
	psql -U postgres -d test -c "DROP DATABASE postgres"
	psql -U postgres -d postgres -c "CREATE DATABASE postgres"
