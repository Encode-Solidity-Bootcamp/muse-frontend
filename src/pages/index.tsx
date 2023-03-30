import type { NextPage } from "next";
import styles from '@/styles/Home.module.css';

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.walletConnectButton}>
        <img
          className={styles.walletConnectButtonChild}
          alt=""
          src="/frame-1.svg"
        />
        <div className={styles.walletConnect}>Wallet Connect</div>
      </div>
      <div className={styles.createButton}>
        <div className={styles.createButtonChild} />
        <div className={styles.create}>Create</div>
      </div>
      <div className={styles.buttonExplore}>
        <div className={styles.button}>
          <div className={styles.createButtonChild} />
        </div>
        <div className={styles.explore}>Explore</div>
      </div>
      <div className={styles.landingPageChild} />
      <b className={styles.maintext}>
        <p className={styles.listenCollectAnd}>{`Listen, collect and sell `}</p>
        <p className={styles.extraordinaryMusic}>{`extraordinary music `}</p>
        <p className={styles.listenCollectAnd}>NFT’S.</p>
      </b>
      <div className={styles.sidetext}>
        <p className={styles.listenCollectAnd}>
          A digital platform for buying, selling, and discovering exclusive
          music-related non-fungible tokens.
        </p>
        <p className={styles.listenCollectAnd}>{` `}</p>
        <p
          className={styles.listenCollectAnd}
        >{`Discover and collect unique music assets created by various artists, `}</p>
        <p className={styles.listenCollectAnd}>
          and trade them with others using cryptocurrency.
        </p>
      </div>
      <div className={styles.radiantsmall} />
      <div className={styles.radiantbig} />
      <img className={styles.radiantIcon} alt="" src="/radiant.svg" />
      <div className={styles.menu}>
        <div className={styles.menu1}>
          <div className={styles.logo}>MUSE.IO</div>
          <div className={styles.homeExploreProfile}>
            Home Explore Profile Community Contact
          </div>
        </div>
        <img
          className={styles.searchButtonIcon}
          alt=""
          src="/search-button.svg"
        />
      </div>
    </div>
  );
};

export default LandingPage;
