---
sidebar_position: 2
---

# Using lamba expression

You can write your middlewares in form of lambda expression, This will produce the same result as the last simple example: 

```java title="MyApplication.java"
@WebServlet("/*")
public class MyApplication extends Application {
  @Override
  protected void execute() {
    get("/hello", (req, res) -> {
      res.setHeader("Content-Type", "text/html")
      .write("<h1>")
      .write("Hello world")
      .write("</h1>");
    });
  }
}
```