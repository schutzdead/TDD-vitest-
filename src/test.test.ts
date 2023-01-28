import { expect, it, vi } from 'vitest'
import { sum, willBeMockParameter} from './testDriven';

const a = {
  getApples: () => willBeMockParameter(10)
}

it('testing classic', () => {
  expect(sum([1,2,3,a.getApples()])).toBe(26)
})

it('testing classic', () => {
  expect(sum([1,2,3,willBeMockParameter(100)])).toBe(206)
})

it('testing mock2', () => {
  const willBeMockParameter = vi.fn(()=>10)
  expect(sum([1,2,3,willBeMockParameter()])).toBe(16)
  willBeMockParameter.mockReturnValue(20)
})

it('testing mock3', () => {
  const spy_Mock = vi.spyOn(a,'getApples').mockImplementation(() => 25)
  expect(sum([1,2,3,a.getApples()])).toBe(31)
  spy_Mock.mockRestore();
})
