/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack LeVasseuer
// Created on: April 19, 2024 
// This is the Splash Scene

/**
 * This cless is the Splash Scene.
 */
class SplashScene extends Phaser.Scene {
  /** 
   * This method is the construtor.
   */
  constructor() {
    super({ key: "splashScene" })
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manger when the scene starts,
   *   before preload() and creat().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assest
   */
  preload() {
    console.log("Splash Scene")
  }

  /** 
   * Can be defeind on your own Scenes.
   * Use it to creat your game objects. 
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    // pass
  }
  /**
   * Should be overridden by your own Scenes.
   * This method is called pnce per game step while the scene is running.
   *  @param {number} time - The current time.
   *  @param {number} delta - The delta time in ms since the last frame. 
   */
  update(time, delta) {
    // pass
  }
}

export default SplashScene
