---
sidebar_position: 2
---

# Automate the creation of a REST API

With SwiftServe the creation of REST API can be done automatically. All what you need is only the creation of models. In addition, SwiftServe adds the validation of received that if you want to add it to your manually created REST is a bunch of headache. SwiftServe support inheritance and complex design, well written error message and more...

Here an example where you can use SwiftServe to automate the creation of REST API:

```java title="TodoPersistence.java"
@DataSource("todoDtSrc")
public class TodoPersistence implements Persistence<Todo> {
  @Override
  public List<Todo> getAll() {
    // ...
    return todos;
  }
  // other methods ...
}
```

Here we have the model:
```java title="Todo.java"
@Rest
@FromDataSource("todoDtSrc")
public class Todo {
  private Integer id;
  private String content;
  private Boolean completed;
}
```

and now let's to generate the REST API:
```java title="MyApplication.java"
@WebServlet("/*")
public class MyApplication extends Application {
  @Override
  protected void execute() throws Exception {
    generateRest();
  }
}
```
Congratulation 🎊 now you have generated your REST API with the next endpoints:
- `GET /todos`: get all todos
- `GET /todos?limit=n`: get todos limited to n.
- `GET /todos/:id`: get a todo by id.
- `POST /todos`: add a new todo.
- `PUT /todos/:id`: update all the field of an existed todo.
- `PATCH /todos/:id`: update one field from an existed todo.
- `DELETE /todos/:id`: delete an existed todo.

The automatation of create REST APIs include the feature of auto-plural the name of models in the given models.

SwiftServe offers also a way to generate your REST APIs without writting the persistence tier, in this way you can test your application without needs of persistence tier. This is done by creating a local file database, which is called in the context of this framework `Default datasource`.

Here is an example:
```java
@Rest
@FromDataSource
public class Todo {
  private Integer id;
  private String content;
  private Boolean completed;
}
```

This will give you the same result as the last example, with difference of the where the data is stored (persistence tier).