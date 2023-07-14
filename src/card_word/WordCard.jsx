import { Component } from "react";

import React from "react";
import cn from "classnames";
import { Header } from "../card_header/Header";

import styles from "./style/style.module.scss";
import img from "./img/img.png";
import voice from "./img/voice.svg";
import next_word from "./img/next_word.svg";
import bookmark from "./img/bookmark.svg";
import arrow_right from "./img/arrow_right.svg";

export class WordCard extends Component {
  render() {
    return (
      <div className={cn(styles.root, "word-card")}>
        <div className={styles.flex_col}>
          <div className={styles.flex_col__cell}>
            <div className={styles.header}>
              <Header />
            </div>
          </div>
          <div className={styles.flex_col__cell}>
            <div className={styles.main_flex}>
              <div className={styles.main_flex__box}>
                <div className={styles.word_info}>
                  <div className={styles.flex_col2}>
                    <div className={styles.flex_col2__cell}>
                      <img src={img} alt="alt text" className={styles.image1} />
                    </div>
                    <div className={styles.flex_col2__cell}>
                      <div className={styles.flex_col3}>
                        <div className={styles.flex_col3__cell}>
                          <div className={styles.flex_row}>
                            <div className={styles.flex_row__cell}>
                              <h1 className={styles.title1}>
                                большой, великий
                              </h1>
                            </div>
                            <div className={styles.flex_row__spacer} />
                            <div className={styles.flex_row__cell}>
                              <h1 className={styles.title1}>grand</h1>
                            </div>
                          </div>
                        </div>
                        <div className={styles.flex_col3__cell}>
                          <div className={styles.flex_col4}>
                            <div className={styles.flex_col4__cell}>
                              <h4 className={styles.highlights}>
                                {" "}
                                Мы прибыли на Гранд Каньон из Питтсбурга
                              </h4>
                            </div>
                            <div className={styles.flex_col4__cell}>
                              <h4 className={styles.highlights}>
                                {" "}
                                We arrived at the Grand Canyon from Pittsburgh.
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.main_flex__box}>
                <div className={styles.button_box}>
                  <div className={styles.button_flex}>
                    <div className={styles.button_flex_box}>
                      <div className={styles.button_line_flex}>
                        <div className={styles.button_line_flex_box}>
                          <div className={styles.buttonB}>
                            <img
                              src={voice}
                              alt="alt text"
                              className={styles.voise_icon}
                            />
                          </div>
                        </div>
                        <div className={styles.button_line_flex_box}>
                          <div className={styles.buttonDB}>
                            <h3 className={styles.button_text}>Перевод</h3>
                          </div>
                        </div>
                        <div className={styles.button_line_flex_box}>
                          <div className={styles.buttonB}>
                            <h3 className={styles.button_text}>Уровень: 0</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.button_flex_box}>
                      <div className={styles.button_line_flex}>
                        <div className={styles.button_line_flex_box}>
                          <div className={styles.buttonB}>
                            <img
                              src={next_word}
                              alt="alt text"
                              className={styles.next_word_icon}
                            />
                          </div>
                        </div>
                        <div className={styles.button_line_flex_box}>
                          <div className={styles.buttonB}>
                            <img
                              src={bookmark}
                              alt="alt text"
                              className={styles.bookmark_icon}
                            />
                          </div>
                        </div>
                        <div className={styles.button_line_flex_box}>
                          <div className={styles.buttonDB}>
                            <img
                              src={arrow_right}
                              alt="alt text"
                              className={styles.arrow_right_icon}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
