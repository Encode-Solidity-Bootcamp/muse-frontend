    addItem: This function is used to add an NFT to the marketplace. It requires the following parameters:
        _nftContract: The address of the NFT contract.
        _tokenId: The ID of the NFT.
        _amount: The amount of the NFT to be listed for sale.
        _name: The name of the NFT.
        _price: The price of the NFT.

    buyItem: This function is used to buy an NFT from the marketplace. It requires the following parameters:
        _itemId: The ID of the NFT to be purchased.
        _amount: The amount of the NFT to be purchased.

    resumeMarketPlace: This function is used to resume the marketplace. It can only be called by the owner of the smart contract.

    pauseMarketPlace: This function is used to pause the marketplace. It can only be called by the owner of the smart contract.

In addition to these functions, the smart contract includes the following internal functions and variables:

    struct Item: This is a struct that defines the properties of an NFT listed for sale. It includes the following fields:
        nftContract: The address of the NFT contract.
        tokenId: The ID of the NFT.
        amount: The amount of the NFT listed for sale.
        name: The name of the NFT.
        price: The price of the NFT.
        seller: The address of the seller.
        sold: A Boolean value indicating whether the NFT has been sold.

    mapping(uint256 => Item) public items: This is a mapping that stores the NFTs listed for sale in the marketplace. It maps an item ID to its corresponding Item struct.

    uint256 public itemCount: This is a counter that keeps track of the number of NFTs listed for sale in the marketplace.

    bool public isPaused: This is a Boolean variable that indicates whether the marketplace is paused or not.

    uint256 public fees: This is a variable that stores the marketplace platform fees in basis points.

    _isPaused(): This is a modifier that checks if the marketplace is paused.

    _checkPauseStatus(): This is an internal function that checks if the marketplace is paused.

    event ItemAdded(uint256 itemId, address nftContract, uint256 tokenId, uint256 amount, string name, uint256 price, address seller): This is an event that is triggered when an NFT is added to the marketplace.

    event ItemSold(uint256 itemId, address buyer): This is an event that is triggered when an NFT is sold on the marketplace.
