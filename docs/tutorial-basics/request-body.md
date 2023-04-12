---
sidebar_position: 4
---

# Extract the request body

With SwiftServe you can extract the request body in a simple way basing on the mime-type of request for safety.

Here is a list of example of extracting request body in different ways:

#### Form-data format
For form-data we call the method `formDataBody()` which return a Map.

Here is an example: 
```java
public class MyAction implements HttpRequestHandler {
  @Override
  public void method(Request req, Response res) {
      Map<String, String> body = req.formDataBody();
      // ...
  }
}
```

#### Json format

For json format we call the method `jsonBody()` which return a String in form of json.

Here is an example: 

```java
public class MyAction implements HttpRequestHandler {
  @Override
  public void method(Request req, Response res) {
      String body = req.jsonBody();
      // ...
  }
}
```

#### String format

We can extract the request of request without depending on its mime-type. For this, we use
the method `body()` that parse the request body from a `InputStream` and convert it to String.

Here is an example: 

```java
public class MyAction implements HttpRequestHandler {
  @Override
  public void method(Request req, Response res) {
      String body = req.body();
      // ...
  }
}
```

#### Url-encoded format

For url-encoded format we call the method `urlEncodedFormatBody()` which return a String in form of key-value separed by `=`.

Here is an example: 

```java
public class MyAction implements HttpRequestHandler {
  @Override
  public void method(Request req, Response res) {
      String body = req.urlEncodedFormatBody();
      // ...
  }
}
```

#### Instance of the specified class

SwiftServe provides a way to parse the body of the request and maps it to an instance of the specified class.

Here is an example:

```java
public class Book {
  private String isbn;
  private String title;
  // ...
}
```

If the request is in form of json format and you want to parse it and map it to an instance of `Book` :

```java
public class MyAction implements HttpRequestHandler {
  @Override
  public void method(Request req, Response res) {
      Book book = (Book) req.body(Book.class);
      // ...
  }
}
```

We are working to support other format...