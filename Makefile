start:
	npm run start --prefix ./backend & npm run start --prefix ./frontend

start-dev:
	npm run start:dev --prefix ./backend & npm run start --prefix ./frontend

test:
	npm run test --prefix ./backend & npm run test --prefix ./frontend
