---
sidebar_position: 3
---

# Complex design

In the last example, the created REST API was only from one model, which was a simple example to demonstrate how to the automatic creation is done. Now we will create a little more complex design :

Here our class from the last example `Todo`:

```java title="Todo.java"
@Rest
@FromDataSource
public class Todo {
  private Integer id;
  private String content;
  private Boolean completed;
  @BelongTo
  private User user;
}
```

Here the new class `User`:
```java title="User.java"
@Rest
@FromDataSource
public class User {
  String private id;
  private String name;
  @HasMany
  private List<Todo> todos;
}
```

Let's to generate the REST API:
```java title="MyApplication.java"
@WebServlet("/*")
public class MyApplication extends Application {
  @Override
  protected void execute() throws Exception {
    generateRest();
  }
}
```

In this example we have a design: `a user has many todos` and `todo belongs to a user`, this means the relationship of One-To-Many.
```
+------+               +------+
| User | 1 --------- * | Todo |
+------+               +------+
 ```

This will generate a REST API with the next endpoints:

for `Todo` model:
- `GET /todos`: get all todos
- `GET /todos?limit=n`: get todos limited to n.
- `GET /todos/:id`: get a todo by id.
- `POST /todos`: add a new todo.
- `PUT /todos/:id`: update all the field of an existed todo.
- `PATCH /todos/:id`: update one field from an existed todo.
- `DELETE /todos/:id`: delete an existed todo.

for `User` model:
- `GET /users`: get all users
- `GET /users?limit=n`: get users limited to n.
- `GET /users/:id/todos`: get all todos of user with matched id.
- `GET /users/:id`: get a user by id.
- `POST /users`: add a new user.
- `PUT /users/:id`: update all the field of an existed user.
- `PATCH /users/:id`: update one field from an existed user.
- `DELETE /users/:id`: delete an existed user.