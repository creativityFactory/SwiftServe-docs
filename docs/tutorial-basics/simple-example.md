---
sidebar_position: 1
---


# Simple example

Here is a simple example of using SwiftServe framework for rendering a hello world html page `/hello`:

Create `HelloAction.java` :

```java title="HelloAction.java"
public class HelloAction implements HttpRequestHandler {
  @Override
  public void method(Request req, Response res) {
      res.setHeader("Content-Type", "text/html")
      .write("<h1>")
      .write("Hello world")
      .write("</h1>");
  }
}
```

And let to create our MVC2 controller `MyApplication.java` :

```java title="MyApplication.java"
@WebServlet("/*")
public class MyApplication extends Application {
  @Override
  protected void execute() {
    get("/hello", new HelloAction());
  }
}
```
