const indexAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"collection","type":"address"}],"outputs":[]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"collection","type":"address"},{"name":"owner","type":"address"},{"name":"nft","type":"address"}]},{"name":"destruct","inputs":[{"name":"gasReceiver","type":"address"}],"outputs":[]}],"data":[{"key":1,"name":"_nft","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_nft","type":"address"},{"name":"_collection","type":"address"},{"name":"_owner","type":"address"}]} as const
const indexBasisAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"collection","type":"address"}]},{"name":"destruct","inputs":[{"name":"gasReceiver","type":"address"}],"outputs":[]}],"data":[{"key":1,"name":"_collection","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_collection","type":"address"}]} as const
const nftAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"owner","type":"address"},{"name":"sendGasTo","type":"address"},{"name":"remainOnNft","type":"uint128"}],"outputs":[]},{"name":"transfer","inputs":[{"name":"to","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"changeOwner","inputs":[{"name":"newOwner","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"changeManager","inputs":[{"name":"newManager","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]}],"data":[{"key":1,"name":"_id","type":"uint256"}],"events":[{"name":"NftCreated","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}],"outputs":[]},{"name":"OwnerChanged","inputs":[{"name":"oldOwner","type":"address"},{"name":"newOwner","type":"address"}],"outputs":[]},{"name":"ManagerChanged","inputs":[{"name":"oldManager","type":"address"},{"name":"newManager","type":"address"}],"outputs":[]},{"name":"NftBurned","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"_id","type":"uint256"},{"name":"_collection","type":"address"},{"name":"_owner","type":"address"},{"name":"_manager","type":"address"}]} as const
const venomDropCollectionAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"codeNft","type":"cell"},{"name":"owner","type":"address"}],"outputs":[]},{"name":"mintNft","inputs":[{"name":"owner","type":"address"},{"name":"amount","type":"uint32"},{"name":"currentIteration","type":"uint32"}],"outputs":[]},{"name":"setHasMaxSupply","inputs":[{"name":"hasMaxSupply","type":"bool"}],"outputs":[]},{"name":"setMaxSupply","inputs":[{"name":"maxSupply","type":"uint256"}],"outputs":[]},{"name":"setMintStages","inputs":[{"components":[{"name":"name","type":"string"},{"name":"price","type":"uint64"},{"name":"startTime","type":"uint32"},{"name":"endTime","type":"uint32"}],"name":"mintStages","type":"tuple[]"}],"outputs":[]},{"name":"mint","inputs":[{"name":"amount","type":"uint32"}],"outputs":[]},{"name":"multiconfigure","inputs":[{"components":[{"name":"hasMaxSupply","type":"bool"},{"name":"maxSupply","type":"uint256"},{"components":[{"name":"name","type":"string"},{"name":"price","type":"uint64"},{"name":"startTime","type":"uint32"},{"name":"endTime","type":"uint32"}],"name":"mintStages","type":"tuple[]"}],"name":"options","type":"tuple"}],"outputs":[]},{"name":"getHasMaxSupply","inputs":[],"outputs":[{"name":"hasMaxSupply","type":"bool"}]},{"name":"getMaxSupply","inputs":[],"outputs":[{"name":"maxSupply","type":"uint256"}]},{"name":"getMintStages","inputs":[],"outputs":[{"components":[{"name":"name","type":"string"},{"name":"price","type":"uint64"},{"name":"startTime","type":"uint32"},{"name":"endTime","type":"uint32"}],"name":"mintStages","type":"tuple[]"}]},{"name":"getInfo","inputs":[],"outputs":[{"components":[{"name":"hasMaxSupply","type":"bool"},{"name":"maxSupply","type":"uint256"},{"name":"totalSupply","type":"uint256"},{"components":[{"name":"name","type":"string"},{"name":"price","type":"uint64"},{"name":"startTime","type":"uint32"},{"name":"endTime","type":"uint32"}],"name":"mintStages","type":"tuple[]"}],"name":"info","type":"tuple"}]},{"name":"owner","inputs":[],"outputs":[{"name":"value0","type":"address"}]},{"name":"renounceOwnership","inputs":[],"outputs":[]},{"name":"transferOwnership","inputs":[{"name":"newOwner","type":"address"}],"outputs":[]},{"name":"totalSupply","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"count","type":"uint128"}]},{"name":"nftCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"nftCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"codeHash","type":"uint256"}]},{"name":"nftAddress","inputs":[{"name":"answerId","type":"uint32"},{"name":"id","type":"uint256"}],"outputs":[{"name":"nft","type":"address"}]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]}],"data":[{"key":1,"name":"_creator","type":"address"},{"key":2,"name":"_id","type":"uint256"}],"events":[{"name":"OwnershipTransferred","inputs":[{"name":"previousOwner","type":"address"},{"name":"newOwner","type":"address"}],"outputs":[]},{"name":"NftCreated","inputs":[{"name":"id","type":"uint256"},{"name":"nft","type":"address"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"creator","type":"address"}],"outputs":[]},{"name":"NftBurned","inputs":[{"name":"id","type":"uint256"},{"name":"nft","type":"address"},{"name":"owner","type":"address"},{"name":"manager","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"_codeNft","type":"cell"},{"name":"_totalSupply","type":"uint128"},{"name":"_owner","type":"address"},{"name":"_creator","type":"address"},{"name":"_id","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_hasMaxSupply","type":"bool"},{"name":"_maxSupply","type":"uint256"},{"components":[{"name":"name","type":"string"},{"name":"price","type":"uint64"},{"name":"startTime","type":"uint32"},{"name":"endTime","type":"uint32"}],"name":"_mintStages","type":"tuple[]"},{"name":"_remainOnNft","type":"uint128"},{"name":"_mintNftValue","type":"uint128"}]} as const
const venomDropCollectionFactoryAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"codeCollection","type":"cell"},{"name":"codeNft","type":"cell"}],"outputs":[]},{"name":"deployCollection","inputs":[{"name":"owner","type":"address"},{"name":"id","type":"uint256"}],"outputs":[]}],"data":[],"events":[{"name":"VenomDropCollectionDeployed","inputs":[{"name":"collection","type":"address"},{"name":"owner","type":"address"},{"name":"creator","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_codeCollection","type":"cell"},{"name":"_codeNft","type":"cell"}]} as const

export const abi = {
    Index: indexAbi,
    IndexBasis: indexBasisAbi,
    Nft: nftAbi,
    VenomDropCollection: venomDropCollectionAbi,
    VenomDropCollectionFactory: venomDropCollectionFactoryAbi
} as const

export type ABI = typeof abi
export type IndexAbi = typeof indexAbi
export type IndexBasisAbi = typeof indexBasisAbi
export type NftAbi = typeof nftAbi
export type VenomDropCollectionAbi = typeof venomDropCollectionAbi
export type VenomDropCollectionFactoryAbi = typeof venomDropCollectionFactoryAbi
