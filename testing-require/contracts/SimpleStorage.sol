// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
  uint private _data;
  address private _owner;

  constructor() {
    _owner = msg.sender;
  }

  function setData(uint data_) external {
    _data = data_;
  }

  function getData() external view returns (uint)  {
    return _data;
  }
}