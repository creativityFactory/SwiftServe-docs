---
sidebar_position: 3
---

# Queries and route parameters
SwiftServe provides us a simple way to extract queries and route parameters.

Here is an example for with `GET /path/1/src?limit=8`:

```java
public class MyAction implements HttpRequestHandler {
  @Override
  public void method(Request req, Response res) {
      /*
       * extract query with name `limit`
       * output: limit = 8
       */
      String limit = req.query("limit");
}
```

Here is an example of extracting route paramters. For `GET /path/:id/src`:
```java
public class MyAction implements HttpRequestHandler {
  @Override
  public void method(Request req, Response res) {
      /*
       * extract route parameter with name `id`
       * output: id = 8
       */
      String id = req.params("id");
}
```