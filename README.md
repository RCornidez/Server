# Server Template
Express Router with raw Postgresql queries

TODO: <br/>
	- Create shell script to seed table automatically <br/>
	- Use body-parser properly for handling requests <br/>
	- Create tests and logging <br/>
	- Research how to use blobs (large objects) in postgresql <br/>
 	- Research proper cors implementation for production <br/>

May be a problem: <br/>
	- The timestamp when creating the tables should work, need to test and verify later.




How to use: <br/>
I'm a huge fan of cli, i'd recommend setting up alias' they will save you time.

write the following in .bashrc (you'll need to exit and ssh back into the server): <br/>
alias psql='psql -U postgres -d postgres'

Create the tables: <br/>
	psql -U postgres -d postgres -c "\i ‘./create_tables.sql’"

Drop 'postgres' database for fresh start: <br/>
	psql -U postgres -d postgres -c "CREATE DATABASE test" <br/>
	psql -U postgres -d test -c "DROP DATABASE postgres" <br/>
	psql -U postgres -d postgres -c "CREATE DATABASE postgres" <br/>
