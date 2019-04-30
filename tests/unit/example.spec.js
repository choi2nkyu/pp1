import { expect } from "chai";
import { shallowMount, mount } from "@vue/test-utils";
import About from "@/views/About.vue";
import { wrap } from "module";

describe("HelloWorld.vue", () => {
  let wrapper;
  const wage = 500;
  const amount = 2000;

  /*beforeEach(function() {
    
    
  });*/

  it("test1", () => {
    wrapper = shallowMount(About);
    expect(wrapper.find("table").exists());
  });

  describe("Click event", () => {
    wrapper = mount(About, {
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
      expect(wrapper.vm.wage).to.equal(wage);
      console.log(wrapper.vm.users);
    });
    it("test5", () => {
      wrapper.find("button.calculate").trigger("click");
      expect(wrapper.vm.columns).to.include("salary");
    });
  });

  it("test4", () => {
    wrapper = shallowMount(About);
    const buttonArray = wrapper.findAll("button");
    const secondButton = buttonArray.at(1);
    expect(wrapper.find("button.calculate").text()).to.include("Calculate");
    expect(secondButton.text()).to.include("Clear");
  });
});
