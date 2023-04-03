    Constructor: Initializes the contract with an address for the "Artists" contract.
        Parameters:
            _artistContractAddress (address): The address of the "Artists" contract.

    deployERC1155: Deploys a new ERC1155 contract (collection contract).
        Parameters:
            _collectionInfoHash (string): The IPFS hash of the collection information.
            _nftItemsHash (string[]): An array of IPFS hashes for each NFT item in the collection.
            _ids (uint256[]): An array of token IDs for each NFT item in the collection.
            _quantities (uint256[]): An array of quantities for each NFT item in the collection.
        Returns:
            (address): The address of the deployed collection contract.

    mintCollection: Calls the "mintAll" function on a collection contract to mint all NFT items.
        Parameters:
            _addr (address): The address of the collection contract to mint.

    getAllArtistCollections: Returns an array of all collection contracts created by a specific artist.
        Parameters:
            _artist (address): The address of the artist to get collections for.
        Returns:
            (address[]): An array of all collection contract addresses created by the artist.

    getAllCollections: Returns an array of all collection contracts created on the platform.
        Returns:
            (address[]): An array of all collection contract addresses created on the platform.