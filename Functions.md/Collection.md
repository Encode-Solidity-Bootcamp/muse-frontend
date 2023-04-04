    constructor: The constructor function is executed when the factory contract calls its own deployERC1155 method. It requires the following parameters:
        _collectionInfoHash: hash of CollectionInfo, not contractHash (string)
        _hashOfNFTItems: hash cids of individual nft items in an array (string[])
        _ids: an array of token IDs (uint256[])
        _quantities: an array of the quantities of each item (uint256[])
        owner: address of the owner of the contract (address)

    getTotalChildren: This function returns the number of child tokens deployed. It requires no parameters.

    _beforeTokenTransfer: This function is an override of the _beforeTokenTransfer function in the ERC1155 contract. It requires the following parameters:
        operator: address of the operator performing the transfer (address)
        from: address of the token owner (address)
        to: address of the token recipient (address)
        ids: an array of token IDs being transferred (uint256[])
        amounts: an array of the amounts of tokens being transferred (uint256[])
        data: optional additional data to send with the transfer (bytes)

    uri: This function returns the token URI for a given token ID. It requires the following parameter:
        _id: ID of the token URI (uint256)

    mintAll: This function mints all the tokens specified for this collection. It requires no parameters.

    setApprovalforAll: This function sets approval for the marketplace, pass in approved as true or false depending on if you want to set or revoke approval. It requires the following parameters:
        _operator: address of the operator (address)
        _approved: boolean value indicating if approval is set or revoked (bool)