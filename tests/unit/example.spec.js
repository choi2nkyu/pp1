import { expect } from "chai";
import { shallowMount, mount } from "@vue/test-utils";
import About from "@/views/About.vue";
import { wrap } from "module";

describe("HelloWorld.vue", () => {
  let wrapper;
  let wrapper2;
  const wage = 500;
  const amount = 2000;

  /*beforeEach(function() {
    
    
  });*/

  it("test1", () => {
    wrapper = shallowMount(About);
    expect(wrapper.find("table").exists());
  });

  describe("Click event", () => {
    wrapper2 = mount(About, {
      propsData: {
        amount: amount,
        wage: wage
      }
    });
    it("test2", () => {
      expect(wrapper.props.amount).to.equal(undefined);
    });
    it("test3", () => {
      wrapper.find("button.calculate").trigger("click");
      console.log(wrapper.vm);
      expect(wrapper.vm.wage).to.equal(wage);
    });
  });

  it("test4", () => {
    wrapper = shallowMount(About);
    expect(wrapper.find("button.calculate").text()).to.include("Calc");
  });
});
