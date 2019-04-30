import { expect } from "chai";
import { shallowMount, mount } from "@vue/test-utils";
import About from "@/views/About.vue";
import { wrap } from "module";

describe("HelloWorld.vue", () => {
  let wrapper;
  let wrapper2;

  beforeEach(function() {
    wrapper = shallowMount(About);
    wrapper2 = mount(About);
  });

  it("test1", () => {
    expect(wrapper.find("table").exists());
  });

  describe("Click event", () => {
    it("test2", () => {
      expect(wrapper.props.amount).to.equal(undefined);
    });
    it("test3", () => {
      wrapper.find("button.calculate").trigger("click");
      expect(wrapper.props.amount).to.equal(1000);
    });
  });

  it("test4", () => {
    expect(wrapper.find("button.calculate"))
      .contains("calc")
      .to.be(true);
  });
});
