const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productImg: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
  },
  offers: {
    type: [String],
  },
  warrenty: {
    type: String,
  },
  productVarient: {
    type: [String],
  },
  WifiConnectivity: {
    type: String,
    default: "No",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

const recipeSchema = new mongoose.Schema({
  imgBanner: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  servings: {
    type: Number,
  },
  perppingTime: {
    type: Number,
  },
  cookingTime: {
    type: Number,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  direction: {
    type: [String],
    required: true,
  },
  note: {
    type: String,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;

const facebookPostSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  postedDate: {
    type: Date,
    required: true,
  },
  postedTime: {
    type: Number,
    required: true,
  },
  postDescription: {
    type: String,
  },
  postImg: {
    type: String,
  },
  likes: {
    type: Number,
    required: true,
    min: 0,
  },
  comments: {
    type: Number,
    min: 0,
  },
  shares: {
    type: Number,
    min: 0,
  },
});

const FacebookPost = mongoose.model("FacebookPost", facebookPostSchema);

module.exports = FacebookPost;

const profileSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
    profilePictureUrl: {
      type: String,
    },
  },
  { timestamps: true },
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;

const musicAlbumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: [
        "Rock",
        "Pop",
        "Hip-Hop",
        "Jazz",
        "Classical",
        "Country",
        "Electronic",
        "R&B",
        "Reggae",
        "Indie",
      ],
    },
    releaseYear: {
      type: Number,
    },
    recordLabel: {
      type: String,
    },
    format: {
      type: String,
    },
    isExplicit: {
      type: Boolean,
      default: false,
    },
    isAvailableOnStreming: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const MusicAlbum = mongoose.model("MusicAlbum", musicAlbumSchema);

module.exports = MusicAlbum;

const playersProfileSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: String,
    lastName: String,
    age: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    country: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    gamesPlayed: {
      type: Number,
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
    },
    preferredGame: {
      type: String,
    },
  },
  { timestamps: true },
);

const PlayersProfile = mongoose.model("PlayersProfile", playersProfileSchema);

module.exports = PlayersProfile;

const stayPropertiesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    pricePerNight: {
      type: Number,
    },
    capacity: {
      type: Number,
      min: 1,
    },
    isPetFriendly: {
      type: Boolean,
      default: false,
    },
    hasWifi: {
      type: Boolean,
      default: false,
    },
    hasParking: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const StayProperties = mongoose.model("StayProperties", stayPropertiesSchema);

module.exports = StayProperties;

const laptopSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    processor: {
      type: String,
    },
    ramSizeGB: {
      type: Number,
    },
    storageSizeGB: {
      type: Number,
    },
    screenSizeInches: {
      type: Number,
    },
    isTouchScreen: {
      type: Boolean,
      default: false,
    },
    hasSSD: {
      type: Boolean,
      default: false,
    },
    isSaleActive: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Laptop = mongoose.model("Laptop", laptopSchema);

module.exports = Laptop;

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  },
  mileage: {
    type: Number,
  },
  fuelType: {
    type: String,
    enum: ["Gasoline", "Diesel", "Electric", "Hybrid"],
  },
  transmission: {
    type: String,
    enum: ["Automatic", "Manual"],
  },
  bodyStyle: {
    type: String,
  },
  color: {
    type: String,
  },
  isCertifiedPreOwned: {
    type: Boolean,
    default: false,
  },
  isFourWheelDrive: {
    type: Boolean,
    default: false,
  },
  isLuxury: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
