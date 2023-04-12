---
sidebar_position: 6
---


# Middlewares
SwiftServe offers us writing middleware in simple, efficient and modern way.

Here is an example of using middlewares for a specific route :

```java title="MyApplication.java"
@WebServlet("/*")
public class MyApplication extends Application {
  @Override
  protected void execute() {
    post("/resource", new AuthAction());
    post("/resource", new MyAction());
    // ...
  }
}
```

For controlling the flow of middlewares, the request object contains `next(boolean n)` method for indication of passing this request for the next middleware or not.

Here `AuthAction.java`

```java title="AuthAction.java"
public class AuthAction implements HttpRequestHandler {
  @Override
  public void method(Request req, Response res) {
      // ...
      if (isAuth) {
        req.next(true);
        return;
      }
      // ...
  }
}
```

for this example we assume the `isAuth` is a boolean variable which indicates if this user
is authentificated or not. In the case of authentification, we forward this request to the next middlewares, in the other hand, we stop it for the current middleware.