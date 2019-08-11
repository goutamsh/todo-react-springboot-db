# To Do App with React JS and Springboot backend and DB 


Start react js application
```
cd todo-react-web
npm start
```

this starts react application at 
http://localhost:3000/


Start Springboot application with main class TodoSpringbootBackendApplication.java

this starts springboot application at 8080 port

curl commands to add few todos
```

curl -d '{"text":"to do text5","done":"true"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/todos

curl -X GET http://localhost:8080/api/todos
```

