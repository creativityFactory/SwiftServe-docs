---
sidebar_position: 1
---

# Creation of a REST API manually

SwiftServe offers a simple and efficient way to create web services in form of REST API. In this example we will try to create a REST API for a model called `Todo`. Let's start to see the simplicity.

Here we have the model `Todo.java` :
```java
public class Todo {
  private Integer id;
  private String content;
  private Boolean completed;
  // ... ctor, setters & getters
}
```

Let's assume that we have a dao oject for persistence tier named `todoDao`.

For `GET /todos` :
```java
public class GetAllTodo implements HttpRequestHandler {
  @Override
  public void method(Request req, Response res) {
      // ... 
      List<Todo> todos = todoDao.getAll();
      res.json(todos);
  }
}
```

For `GET /todos/:id` :
```java
public class GetTodoById implements HttpRequestHandler {
  @Override
  public void method(Request req, Response res) {
      // ... 
      String id = req.params("id");
      Todo todo = todoDao.getById(id);
      res.json(todo);
  }
}
```

For `POST /todos/` :
```java
public class AddTodo implements HttpRequestHandler {
  @Override
  public void method(Request req, Response res) {
      // ... 
      Todo todo = (Todo) req.body(Todo.class);
      Todo savedTodo = todoDa.save(todo);
      res.status(201)
        .json(savedTodo);
  }
}
```


For `PUT /todos/:id` :
```java
public class UpdateTodo implements HttpRequestHandler {
  @Override
  public void method(Request req, Response res) {
      // ... 
      String id = req.params("id");
      Todo todo = (Todo) req.body(Todo.class);
      todo.setId(id);
      Todo updatedTodo = todoDao.update(todo);
      res.json(updatedTodo);
  }
}
```

For `DLETE /todos/:id` :
```java
public class DeleteTodo implements HttpRequestHandler {
  @Override
  public void method(Request req, Response res) {
      // ... 
      String id = req.params("id");
      Todo todo = todoDao.getById(id);
      Todo deleted = todoDao.delete(todo);
      res.json(updatedTodo);
  }
}
```

For now let's do the route mapping in our controller:

```java
@WebServlet("/*")
public class MyApplication extends Application {
  @Override
  protected void execute() {
    get("/todos", new GetAllTodo());
    get("/todos/:id", new GetTodoById());
    post("/todos", new AddTodo());
    put("/todos/:id", new UpdateTodo());
    delete("/todos/:id", new DeleteTodo());
  }
}
```

Maybe this was not a great example but it still simple and easy to understand the mecanism, and we will see next how this hard and repetitive work can be done by SwiftServe.
