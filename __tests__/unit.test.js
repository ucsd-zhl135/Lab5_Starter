// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('phone test 1', () => {
  expect(isPhoneNumber("123-123-1234")).toBe(true);
});
test('phone test 2', () => {
  expect(isPhoneNumber("000-000-0000")).toBe(true);
});
test('phone test 3', () => {
  expect(isPhoneNumber("000-000-000")).toBe(false);
});
test('phone test 4', () => {
  expect(isPhoneNumber("000")).toBe(false);
});

test('email test 1', () => {
  expect(isEmail("a@a.com")).toBe(true);
});
test('email test 2', () => {
  expect(isEmail("zhl135@ucsd.edu")).toBe(true);
});
test('email test 3', () => {
  expect(isEmail("@a.com")).toBe(false);
});
test('email test 4', () => {
  expect(isEmail("@@ucsd.edu")).toBe(false);
});

test('isStrongPassword test 1', () => {
  expect(isStrongPassword("asdfasd")).toBe(true);
});
test('isStrongPassword test 2', () => {
  expect(isStrongPassword("asdfasdf123")).toBe(true);
});
test('isStrongPassword test 3', () => {
  expect(isStrongPassword("123a")).toBe(false);
});
test('isStrongPassword test 4', () => {
  expect(isStrongPassword("a")).toBe(false);
});


test('isDate test 1', () => {
  expect(isDate("1/1/2000")).toBe(true);
});
test('isDate test 2', () => {
  expect(isDate("20/20/2000")).toBe(true);
});
test('isDate test 3', () => {
  expect(isDate("123a")).toBe(false);
});
test('isDate test 4', () => {
  expect(isDate("a")).toBe(false);
});


test('isHexColor test 1', () => {
  expect(isHexColor("#ff5733")).toBe(true);
});
test('isHexColor test 2', () => {
  expect(isHexColor("#ffffff")).toBe(true);
});
test('isHexColor test 3', () => {
  expect(isHexColor("123a")).toBe(false);
});
test('isHexColor test 4', () => {
  expect(isHexColor("a")).toBe(false);
});