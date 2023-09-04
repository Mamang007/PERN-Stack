const passport = require("passport");
const { Strategy } = require("passport-jwt");
const pool = require("../db");

const cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) token = req.cookies["token"];
  return token;
};

const opts = {
  secretOrKey: process.env.SECRET_KEY,
  jwtFromRequest: cookieExtractor,
};

passport.use(
  new Strategy(opts, async ({ id }, done) => {
    try {
      const results = await pool.query("SELECT id, email FROM users WHERE id = $1", [id]);

      if (!results.rows.length) {
        throw new Error("401 not authorized");
      }

      let user = { id: results.rows[0].id, email: results.rows[0].email };

      return await done(null, user);
    } catch (error) {
      console.log(error.message);
      return done(null, false);
    }
  })
);
