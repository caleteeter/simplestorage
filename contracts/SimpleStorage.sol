// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  uint256 storedData;

  event StoredDataChanged(
    uint256 oldValue,
    uint256 newValue
  );

  constructor() {
    storedData = 7;
  }

  function get() public view returns (uint256) {
    return storedData;
  }

  function set(uint256 newValue) public {
    uint256 prevValue = storedData;
    storedData = newValue;

    emit StoredDataChanged(prevValue, newValue);
  }
}
