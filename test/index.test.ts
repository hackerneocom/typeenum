import { strict as assert } from "assert";
import { TypingEnum } from "../src";

describe("basic feature", () => {
  class OrderStatus extends TypingEnum {
    static readonly created = new OrderStatus(1, "Order created");
    static readonly paid = new OrderStatus(2, "Order paid");
    static readonly cancelled = new OrderStatus(3, "Order canclled");
    private static _ = this.finish();
  }

  it("member basic properties", () => {
    assert.equal(OrderStatus.created.value, 1);
    assert.equal(OrderStatus.created.name, "created");
    assert.equal(OrderStatus.created.description, "Order created");
  });

  it("toString method", () => {
    assert.equal(
      "OrderStatus: " + OrderStatus.paid,
      "OrderStatus: OrderStatus.paid"
    );
  });

  it("find member by value", () => {
    assert.equal(OrderStatus.by_value(1), OrderStatus.created);
  });

  it("find member by name", () => {
    assert.equal(OrderStatus.by_name("paid"), OrderStatus.paid);
  });

  it("names", () => {
    assert.deepEqual(OrderStatus.names, ["created", "paid", "cancelled"]);
  });

  it("values", () => {
    assert.deepEqual(OrderStatus.values, [1, 2, 3]);
  });

  it("iterability", () => {
    const result: Array<string> = [];
    const iterated = [...OrderStatus];
    for (const status of OrderStatus) {
      result.push("OrderStatus: " + status);
    }
    assert.deepEqual(iterated, [
      OrderStatus.created,
      OrderStatus.paid,
      OrderStatus.cancelled,
    ]);
  });
});
