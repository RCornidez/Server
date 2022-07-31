# Server Template
Express Router with raw Postgresql queries

<b>TODO:</b> <br/>
	<ul>
	<li>Create shell script to seed table automatically</li>
	<li>Create tests - found nice tutorial https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6</li>
	<li>Create logging with Morgan</li>
	<li>Research how to use blobs (large objects) in postgresql</li>
 	<li>Research proper cors implementation for production</li>
	</ul>

	<ul>
	<b>May be a problem:</b>
	<li>The timestamp when creating the tables should work, need to test and verify later.</li>
	</ul>



<b>How to use:</b> <br/>
I'm a huge fan of cli, i'd recommend setting up alias' they will save you time.

write the following in .bashrc (you'll need to exit and ssh back into the server): <br/>
alias psql='psql -U postgres -d postgres'

<b>Change password for postgres user:</b><br/>
	Allow password-less login <br/>
		sudo vi /etc/postgresql/14/main/pg_hba.conf<br/>
			Change this line to end in 'trust' instead of 'md5'<br/>
			# Database administrative login by Unix domain socket<br/>
			local   all             postgres                  md5<br/>
	Restart psql service:<br/>
		sudo systemctl stop postgresql.service<br/>
		sudo systemctl start postgresql.service<br/>
	Log into psql:<br/>
		psql -U postgres -d postgres<br/>
			within psql run the following and enter password 'password':<br/>
			/password postgres<br/>
	Configure password-only log in:<br/>
	    sudo vi /etc/postgresql/14/main/pg_hba.conf<br/>
    	    Change this line to end in 'md5' instead of 'trust'<br/>
       		# Database administrative login by Unix domain socket<br/>
        	local   all             postgres              md5<br/>
    Restart psql service:<br/>
        sudo systemctl stop postgresql.service<br/>
        sudo systemctl start postgresql.service<br/>

	

<b>Create the tables:</b> <br/>
	psql -U postgres -d postgres -c "\i ./create_tables.sql"

<b>Drop 'postgres' database for fresh start:</b> <br/>
	psql -U postgres -d postgres -c "CREATE DATABASE test" <br/>
	psql -U postgres -d test -c "DROP DATABASE postgres" <br/>
	psql -U postgres -d postgres -c "CREATE DATABASE postgres" <br/>
