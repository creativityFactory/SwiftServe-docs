---
sidebar_position: 5
---


# Route mapping

SwiftServe has simple and robust routing system, where you can map your route with an action as we saw in the first example. It provide simple way to do your mapping for specific http method for a route with an action. As It support the most used http methods: `GET`, `POST`, `PUT`, `PATCH` and `DELETE`:

```java
@WebServlet("/*")
public class MyApplication extends Application {
  // ...
  @Override
  protected void execute() {
    get("/resource", action1);
    post("/resource", action2);
    put("/resource", action3);
    patch("/resource", action4);
    delete("/resource", action5);
    // ...
  }
}
```
