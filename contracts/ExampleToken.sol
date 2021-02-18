pragma solidity 0.8.0;

import "../openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";


contract ExampleToken is ERC20{
    constructor () public ERC20("Example Token", "ELT") {
        // solhint-disable-previous-line no-empty-blocks
    }

    function mint(address account, uint256 amount) public virtual {
        require(amount > 0);
        _mint(account, amount);
       
    }

    /**
     * @dev Destroys `amount` tokens from the caller.
     * @param amount The amount of tokens to burn.
     * @return A boolean that indicates if the operation was successful.
     */
    function burn(uint256 amount) public returns (bool) {
        require(amount > 0);
        _burn(msg.sender, amount);
        return true;
    }
}



