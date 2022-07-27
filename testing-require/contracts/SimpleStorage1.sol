// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage1 {
  uint private _data;
  address private _owner;

  constructor() {
    _owner = msg.sender;
  }

  function setData(uint data_) external {
    require(
      msg.sender == _owner, 
      "SimpleStorage: Only owner is allowed"
    );
    _data = data_;
  }

  function getData() external view returns (uint)  {
    return _data;
  }
}