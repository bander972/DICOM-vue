<template>
  <div id="app">
    <div class="wrapper">
      <!-- Select Tool Category -->
      <ul class="tool-category-list">
        <li>
          <a class="active" data-category="annotation" href="#">Annotation</a>
        </li>
        <li>
          <a data-category="segmentation" href="#">Segmentation</a>
        </li>
        <li><a data-category="drag" href="#">Drag</a></li>
        <li>
          <a data-category="multitouch-pinch" href="#"
            >Multi-Touch / Pinch (touch only)</a
          >
        </li>
        <li><a data-category="mousewheel" href="#">MouseWheel</a></li>
        <li><a data-category="double-tap" href="#">DoubleTap</a></li>
        <li><a data-category="overlay" href="#">Overlay</a></li>
        <li><a href="index.html">返回管理平台</a></li>
      </ul>
      <!-- Select Active Tool -->
      <ul class="tool-category active" data-tool-category="annotation">
        <li><a href="#" data-tool="ArrowAnnotate">ArrowAnnotate</a></li>
        <li><a href="#" data-tool="Angle">Angle</a></li>
        <li><a href="#" data-tool="Bidirectional">Bidirectional</a></li>
        <li><a href="#" data-tool="CircleRoi">CircleRoi</a></li>
        <li><a href="#" data-tool="CobbAngle">Cobb Angle</a></li>
        <li><a href="#" data-tool="EllipticalRoi">EllipticalRoi</a></li>
        <li><a href="#" data-tool="Eraser">Eraser</a></li>
        <li><a href="#" data-tool="FreehandRoi">FreehandRoi</a></li>
        <li>
          <a href="#" data-tool="FreehandRoiSculptor">FreehandRoiSculptor</a>
        </li>
        <li><a href="#" data-tool="TextMarker">TextMarker</a></li>
        <li><a href="#" data-tool="Length">Length</a></li>
        <li><a href="#" data-tool="Probe">Probe</a></li>
        <li><a href="#" data-tool="RectangleRoi">RectangleRoi</a></li>
      </ul>

      <ul class="tool-category" data-tool-category="segmentation">
        <li>
          <a href="#" data-tool="Brush">BrushTool</a>
        </li>
        <li>
          <a href="#" data-tool="SphericalBrush">SphericalBrushTool</a>
        </li>
        <li>
          <a href="#" data-tool="FreehandScissors">FreehandScissors</a>
        </li>
        <li>
          <a href="#" data-tool="RectangleScissors">RectangleScissors</a>
        </li>
        <li>
          <a href="#" data-tool="CircleScissors">CircleScissors</a>
        </li>
        <li>
          <a href="#" data-tool="CorrectionScissors">CorrectionScissors</a>
        </li>
      </ul>

      <ul class="tool-category" data-tool-category="drag">
        <li><a href="#" data-tool="Crosshairs">Crosshairs</a></li>
        <!-- <li><a href="#" data-tool="DragProbe">DragProbe</a></li> -->
        <li><a href="#" data-tool="Magnify">Magnify</a></li>
        <li><a href="#" data-tool="Pan">Pan</a></li>
        <li><a href="#" data-tool="Rotate">Rotate</a></li>
        <li><a href="#" data-tool="StackScroll">StackScroll</a></li>
        <li><a href="#" data-tool="Wwwc">WWWC</a></li>
        <li><a href="#" data-tool="WwwcRegion">WWWCRegion</a></li>
        <li><a href="#" data-tool="Zoom">Zoom</a></li>
        <li><a href="#" data-tool="DragProbe">DragProbe</a></li>
      </ul>

      <ul class="tool-category" data-tool-category="double-tap">
        <li>
          <a href="#" data-tool="DoubleTapFitToWindow">DoubleTapFitToWindow</a>
        </li>
      </ul>

      <ul class="tool-category" data-tool-category="multitouch-pinch">
        <li>
          <a
            href="#"
            data-tool="PanMultiTouch"
            data-tool-interaction="multitouch"
            >PanMultiTouch</a
          >
        </li>
        <li>
          <a href="#" data-tool="ZoomTouchPinch" data-tool-interaction="pinch"
            >ZoomTouchPinch</a
          >
        </li>
        <li>
          <a href="#" data-tool="RotateTouch" data-tool-interaction="pinch"
            >RotateTouch</a
          >
        </li>
        <li>
          <a
            href="#"
            data-tool="StackScrollMultiTouch"
            data-tool-interaction="multitouch"
            >StackScrollMultiTouch</a
          >
        </li>
      </ul>

      <ul class="tool-category" data-tool-category="mousewheel">
        <li>
          <a
            href="#"
            data-tool="StackScrollMouseWheel"
            data-tool-interaction="wheel"
            >StackScrollMouseWheel</a
          >
        </li>
        <li>
          <a href="#" data-tool="ZoomMouseWheel" data-tool-interaction="wheel"
            >ZoomMouseWheel</a
          >
        </li>
      </ul>

      <ul class="tool-category" data-tool-category="overlay">
        <li>
          <label
            id="scaleOverlay"
            class="checkbox-label"
            for="scaleOverlayCheckbox"
          >
            ScaleOverlay <label class="label-on"> ON</label>
            <label class="label-off"> OFF</label>
          </label>
          <input
            id="scaleOverlayCheckbox"
            class="hide"
            data-tool="ScaleOverlay"
            data-tool-interaction="none"
            type="checkbox"
          />
        </li>
        <li>
          <label id="overlay" class="checkbox-label" for="overlayCheckbox">
            Overlay <label class="label-on"> ON</label>
            <label class="label-off"> OFF</label>
          </label>
          <input
            id="overlayCheckbox"
            class="hide"
            data-tool="Overlay"
            data-tool-interaction="none"
            type="checkbox"
          />
        </li>
      </ul>

      <!-- Our beautiful element targets -->
      <div class="cornerstone-element-wrapper">
        <div id="dicom-list">
          <img
            id="minidicom-style"
            v-for="(item, i) in listObj"
            :key="i"
            :src="item.src"
            v-on:click="selectDicom(i)"
          />
        </div>
        <a href="#" class="save-btn" data-index="0">Save</a>

        <div
          class="cornerstone-element"
          ref="viewer"
          data-index="0"
          oncontextmenu="return false"
        ></div>
        <!-- <a href="#" class="save-btn" data-index="1">Save</a>
        <div class="cornerstone-element" data-index="1" oncontextmenu="return false"></div> -->
        <div id="roi-config">
          <div id="list-categort-roi">
            <Tabs size="small">
              <TabPane label="Categorys">标签一的内容</TabPane>
              <TabPane label="Rois">标签二的内容</TabPane>
            </Tabs>
          </div>

          <div id="roi-content">
            <div>
              <ul style="display:flex;flex-direction: column;">
                <li><a href="#" id="saveToolState">Save Freehand</a></li>
                <li><a href="#" id="clearToolState">Clear Freehand</a></li>
                <li><a href="#" id="loadToolState">Load Freehand State</a></li>
              </ul>
              <div id="roi-list">
                <List>
                  <ListItem>
                    <ListItemMeta
                      avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                      title="This is title"
                      description="This is description, this is description."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemMeta
                      avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                      title="This is title"
                      description="This is description, this is description."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemMeta
                      avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                      title="This is title"
                      description="This is description, this is description."
                    />
                    <template slot="action">
                      <li>
                        <a href="">Edit</a>
                      </li>
                      <li>
                        <a href="">More</a>
                      </li>
                    </template>
                  </ListItem>
                  <ListItem>
                    <ListItemMeta
                      avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                      title="This is title"
                      description="This is description, this is description."
                    />
                    <template slot="action">
                      <li>
                        <a href="">Edit</a>
                      </li>
                      <li>
                        <a href="">More</a>
                      </li>
                    </template>
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cornerstoneTools from "./cornerstoneTools";

export default {
  data() {
    const newVar = {
      mCurrentDicomIndex: 0,
      element: {},
      zoomValue: 0,
      wwwcValue: 0,
      renderTime: 0,
      evt: {},
      listObj: [
        {
          id: 0,
          name: "dicom0",
          src: require("./assets/image/out_36.png"),
          dicomSrc: "wadouri:http://127.0.0.1:8000/read0"
        },
        {
          id: 1,
          name: "dicom1",
          src: require("./assets/image/out_37.png"),
          dicomSrc: "wadouri:http://127.0.0.1:8000/read1"
        },
        {
          id: 2,
          name: "dicom2",
          src: require("./assets/image/out_38.png"),
          dicomSrc: "wadouri:http://127.0.0.1:8000/read2"
        },
        {
          id: 3,
          name: "dicom3",
          src: require("./assets/image/out_39.png"),
          dicomSrc: "wadouri:http://127.0.0.1:8000/read3"
        },
        {
          id: 4,
          name: "dicom4",
          src: require("./assets/image/out_40.png"),
          dicomSrc: "wadouri:http://127.0.0.1:8000/read4"
        },
        {
          id: 5,
          name: "dicom5",
          src: require("./assets/image/out_41.png"),
          dicomSrc: "wadouri:http://127.0.0.1:8000/read5"
        },
        {
          id: 6,
          name: "dicom6",
          src: require("./assets/image/out_42.png"),
          dicomSrc: "wadouri:http://127.0.0.1:8000/read6"
        },
        {
          id: 7,
          name: "dicom7",
          src: require("./assets/image/out_43.png"),
          dicomSrc: "wadouri:http://127.0.0.1:8000/read7"
        },
        {
          id: 8,
          name: "dicom8",
          src: require("./assets/image/out_44.png"),
          dicomSrc: "wadouri:http://127.0.0.1:8000/read8"
        }
      ]
    };
    return newVar;
  },
  methods: {
    selectDicom(index) {
      console.log(index, this.listObj[index].dicomSrc);
      this.mCurrentDicomIndex = index;
      this.loadNewDicomOnCornstone(this.listObj[index].dicomSrc);
    },
    loadNewDicomOnCornstone(dicomSrc) {
      var imageId = dicomSrc;
      window.cornerstone.loadAndCacheImage(imageId).then(function(image) {
        // cornerstoneTools.addStackStateManager(element, ['stack']);
        const element = document.querySelector(".cornerstone-element");
        window.cornerstone.displayImage(element, image);
        // cornerstoneTools.addToolState(this.element, 'stack', stack);
      });
    },
    // 测试http请求是否可以
    testHttp() {
      var str = {
        element: "element",
        eventType: "eventType",
        eventData: "eventData"
      };
      var jsonStr = JSON.stringify(str);
      this.$svgroihttp.addSvgRoiInfo(str).then(res => {
        // console.log(res,"调用")
      });
    },
    // 测试加载roi信息是否可以
    getZoomRate(e) {
      const contextData = e.detail;
      // console.log("事件的细节 getZoomRate",e);
      this.evt = e;

      const viewport = window.cornerstone.getViewport(this.element);
      this.zoomValue = viewport.scale.toFixed(9);
      this.wwwcValue =
        Math.round(viewport.voi.windowWidth) +
        "/" +
        Math.round(viewport.voi.windowCenter);
      this.renderTime = contextData.renderTimeInMs.toFixed(9);
    },
    testLoadRoiInfo() {}
  },

  mounted() {
    this.element = this.$refs.viewer; //获取element
    console.log(this.$refs);
    this.element.addEventListener("cornerstoneimagerendered", this.getZoomRate); //监听事件
    //  this.element.addEventListener('cornerstoneelementdisabled',this.getEnable);

    let cornerstone = window.cornerstone;
    cornerstoneTools.external.cornerstone = cornerstone;
    cornerstoneTools.external.cornerstoneMath = window.cornerstoneMath;
    cornerstoneTools.external.Hammer = window.Hammer;
    window.cornerstoneWADOImageLoader.external.dicomParser = window.dicomParser;
    window.cornerstoneWADOImageLoader.external.cornerstone = window.cornerstone;

    cornerstoneTools.init([
      {
        moduleName: "globalConfiguration",
        configuration: {
          showSVGCursors: true
        }
      },
      {
        moduleName: "segmentation",
        configuration: {
          outlineWidth: 2
        }
      }
    ]);
    const imageIds = [
     "wadouri:http://127.0.0.1:8000/read0",
     "wadouri:http://127.0.0.1:8000/read1",
     "wadouri:http://127.0.0.1:8000/read2",
     "wadouri:http://127.0.0.1:8000/read3",
     "wadouri:http://127.0.0.1:8000/read4",
     "wadouri:http://127.0.0.1:8000/read5",
     "wadouri:http://127.0.0.1:8000/read6",
     "wadouri:http://127.0.0.1:8000/read7",
     "wadouri:http://127.0.0.1:8000/read8",
     "wadouri:http://127.0.0.1:8000/read9",
    ];
    const stack = {
      currentImageIdIndex: 0,
      imageIds: imageIds
    };

    // Enable & Setup all of our elements
    const elements = document.querySelectorAll(".cornerstone-element");
    Array.from(elements).forEach(element => {
      cornerstone.enable(element);

      element.tabIndex = 0;
      element.focus();
      cornerstone.loadAndCacheImage(imageIds[0]).then(function(image) {
        cornerstoneTools.addStackStateManager(element, ["stack"]);
        cornerstone.displayImage(element, image);
        cornerstoneTools.addToolState(element, "stack", stack);
      });
      // this.cornerstone=cornerstone;
      // this.element=element;
      // var imageId="wadouri:http://127.0.0.1:8000/read8";
      //   cornerstone.loadAndCacheImage(imageId).then(function(image){
      //   cornerstoneTools.addStackStateManager(element, ['stack']);
      //   cornerstone.displayImage(element,image);
      //   cornerstoneTools.addToolState(element, 'stack', stack);
      // });

      //Save As Tool
      const index = element.getAttribute("data-index");
      const saveBtn = element.parentElement.querySelector(
        `a[data-index='${index}']`
      );
      saveBtn.addEventListener("click", evt => {
        cornerstoneTools.SaveAs(element, "viewportImage.png");
      });

      // Log measurement events
      const { EVENTS } = cornerstoneTools;
      const log = event => {
        const type = `MEASUREMENT_${event.type
          .replace("cornerstonetoolsmeasurement", "")
          .toUpperCase()}`;
        const color = {
          MEASUREMENT_ADDED: "#27e",
          MEASUREMENT_MODIFIED: "#e72",
          MEASUREMENT_COMPLETED: "#5b5",
          MEASUREMENT_REMOVED: "#f55"
        }[type];

        const getData = detail => {
          const { measurementData = {} } = detail;
          const out = {};
          const measurementKeys = [
            "length",
            "rAngle",
            "value",
            "text",
            "str",
            "text",
            "longestDiameter",
            "shortestDiameter"
          ];

          if (measurementData.cachedStats) {
            Object.keys(measurementData.cachedStats).forEach(key => {
              out[key] = measurementData.cachedStats[key];
            });
          }

          measurementKeys.forEach(key => {
            if (key in measurementData) {
              out[key] = measurementData[key];
            }
          });

          if (Object.keys(out).length === 0) {
            return measurementData;
          } else {
            return JSON.stringify(out);
          }
        };

        console.log(
          "%c %s %c %s %c %o",
          `background: ${color}; color: white; padding: 4px 0;`,
          type,
          // The tool type
          `color: ${color}; font-family: monospace;`,
          event.detail.toolInteraction || event.detail.toolName,
          "",
          getData(event.detail)
          // event.detail
        );
      };
      element.addEventListener(EVENTS.MEASUREMENT_ADDED, log);
      element.addEventListener(EVENTS.MEASUREMENT_MODIFIED, log);
      element.addEventListener(EVENTS.MEASUREMENT_COMPLETED, log);
      element.addEventListener(EVENTS.MEASUREMENT_REMOVED, log);
    });

    // Iterate over all tool-category links
    const toolCategoryLinks = document.querySelectorAll(
      "ul.tool-category-list a"
    );
    const toolCategorySections = document.querySelectorAll("ul.tool-category");
    Array.from(toolCategoryLinks).forEach(link => {
      //
      const categoryName = link.getAttribute("data-category");
      const categoryElement = document.querySelector(
        `section[data-tool-category="${categoryName}"]`
      );
      // Setup listener
      link.addEventListener("click", evt => {
        evt.preventDefault();
        setToolCategoryActive(categoryName);
      });
    });

    // Iterate over all tool buttons
    const toolButtons = document.querySelectorAll("a[data-tool]");
    Array.from(toolButtons).forEach(toolBtn => {
      // Add the tool
      const toolName = toolBtn.getAttribute("data-tool");
      const apiTool = cornerstoneTools[`${toolName}Tool`];

      if (apiTool) {
        cornerstoneTools.addTool(apiTool);
      } else {
        console.warn(`unable to add tool with name ${toolName}Tool`);
        console.log(cornerstoneTools);
      }

      // Setup button listener
      // Prevent right click context menu for our menu buttons
      toolBtn.addEventListener(
        "contextmenu",
        event => event.preventDefault(),
        true
      );
      // Prevent middle click opening a new tab on Chrome & FF
      toolBtn.addEventListener(
        "auxclick",
        event => {
          if (event.button && event.button === 1) {
            event.preventDefault();
          }
        },
        false
      );
      toolBtn.addEventListener("mousedown", evt => {
        const mouseButtonMask = evt.buttons
          ? evt.buttons
          : convertMouseEventWhichToButtons(evt.which);

        const toolInteraction = evt.target.getAttribute(
          "data-tool-interaction"
        );
        setButtonActive(toolName, mouseButtonMask, toolInteraction);
        cornerstoneTools.setToolActive(toolName, {
          mouseButtonMask,
          isTouchActive: true
        });

        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();
        return false;
      });
    });

    // Iterate through swtich ON/OFF tools
    const stateTools = document.querySelectorAll('input[type="checkbox"]');
    Array.from(stateTools).forEach(toolCheckBox => {
      const toolName = toolCheckBox.getAttribute("data-tool");
      const toolLabel = document.querySelector(`#${toolName}`);
      const apiTool = cornerstoneTools[`${toolName}Tool`];

      if (apiTool) {
        cornerstoneTools.addTool(apiTool);
      }
      cornerstoneTools.setToolDisabled(toolName);

      toolCheckBox.addEventListener("change", evt => {
        if (evt.currentTarget.checked) {
          cornerstoneTools.setToolEnabled(toolName);
        } else {
          cornerstoneTools.setToolDisabled(toolName);
        }

        const toolLabelId =
          toolName.charAt(0).toLowerCase() + toolName.slice(1);
        const toolLabel = document.querySelector(`#${toolLabelId}`); //scaleOverlay or overlay
        toolLabel.classList.toggle("turned-on");
      });
    });

    // Activate first tool
    cornerstoneTools.setToolActive(cornerstoneTools.store.state.tools[0].name, {
      mouseButtonMask: 1,
      isTouchActive: true
    });

    const setToolCategoryActive = categoryName => {
      Array.from(toolCategoryLinks).forEach(toolLink => {
        if (categoryName === toolLink.getAttribute("data-category")) {
          toolLink.classList.remove("active");
          toolLink.classList.add("active");
        } else {
          toolLink.classList.remove("active");
        }
      });

      Array.from(toolCategorySections).forEach(toolCategorySection => {
        if (
          categoryName ===
          toolCategorySection.getAttribute("data-tool-category")
        ) {
          toolCategorySection.classList.remove("active");
          toolCategorySection.classList.add("active");
        } else {
          toolCategorySection.classList.remove("active");
        }
      });
    };

    const setButtonActive = (toolName, mouseButtonMask, toolInteraction) => {
      Array.from(toolButtons).forEach(toolBtn => {
        // Classes we need to set & remove
        let mouseButtonIcon = `mousebutton-${mouseButtonMask}`;
        let touchIcon = `touch-1`;
        // Update classes depending on the toolInteraction we clicked
        if (toolInteraction === "none") {
          return;
        } else if (toolInteraction === "multitouch") {
          mouseButtonIcon = null;
          touchIcon = "touch-2";
        } else if (toolInteraction === "pinch") {
          mouseButtonIcon = null;
          touchIcon = "touch-pinch";
        } else if (toolInteraction === "wheel") {
          mouseButtonIcon = "mousebutton-wheel";
          touchIcon = null;
        }

        // Update our target button
        if (toolName === toolBtn.getAttribute("data-tool")) {
          toolBtn.className = "";
          toolBtn.classList.add("active");
          if (mouseButtonIcon) {
            toolBtn.classList.add(mouseButtonIcon);
          }
          if (touchIcon) {
            toolBtn.classList.add(touchIcon);
          }
          // Remove relevant classes from other buttons
        } else {
          if (mouseButtonIcon && toolBtn.classList.contains(mouseButtonIcon)) {
            toolBtn.classList.remove(mouseButtonIcon);
          }
          if (touchIcon && toolBtn.classList.contains(touchIcon)) {
            toolBtn.classList.remove(touchIcon);
          }
          if (
            toolBtn.classList.length === 1 &&
            toolBtn.classList[0] === "active"
          ) {
            toolBtn.classList.remove("active");
          }
        }
      });
    };

    // Find all and configure each textMarkers
    const textMarkerTools = cornerstoneTools.store.state.tools.forEach(
      element => {
        if (element.name === "TextMarker") {
          element.configuration.markers = ["F5", "F4", "F3", "F2", "F1"];
          element.configuration.current = "F5";
          element.configuration.ascending = true;
          element.configuration.loop = true;
        }
      }
    );

    const convertMouseEventWhichToButtons = which => {
      switch (which) {
        // no button
        case 0:
          return 0;
        // left
        case 1:
          return 1;
        // middle
        case 2:
          return 4;
        // right
        case 3:
          return 2;
      }
      return 0;
    };

    //获取和加载数据
    const element = document.querySelector(".cornerstone-element");

    const saveToolStateButton = document.getElementById("saveToolState");
    const clearToolStateButton = document.getElementById("clearToolState");
    const loadToolStateButton = document.getElementById("loadToolState");
    let toolNames = [
      "FreehandRoi",
      "CircleRoi",
      "EllipticalRoi",
      "RectangleRoi"
    ];
    var toolStates = new Array();

    saveToolStateButton.addEventListener("click", event => {
      //保存数据前进行数据清空
      toolStates.splice(0, toolStates.length);
      Array.from(toolNames).forEach(toolname => {
        console.log("当前保存的工具数据为：", toolname);

        //添加单种工具数据
        //根据工具名称获取工具数据并转成json类型
        const toolStateString = JSON.stringify(
          cornerstoneTools.getToolState(element, toolname)
        );
        if (toolStateString) {
          let toolState = JSON.parse(toolStateString);
          // alert("saved");
          //单种数据保存到toolStates当中
          let tooldata = { tooltype: toolname, toolstate: toolState };
          toolStates.push(tooldata);
          console.log("saved data", toolStates);
        } else {
          // alert("nothing to save!");
        }
      });
    });

    clearToolStateButton.addEventListener("click", event => {
      Array.from(toolNames).forEach(toolname => {
        console.log("清空工具数据", toolname);
        cornerstoneTools.clearToolState(element, toolname);
      });
      window.cornerstone.updateImage(element);
    });

    loadToolStateButton.addEventListener("click", event => {
      Array.from(toolStates).forEach(tooldata => {
        console.log("遍历查看当前工具的数据", tooldata);
        if (tooldata) {
          cornerstoneTools.clearToolState(element, tooldata.tooltype);
          console.log("load ", tooldata.toolstate);
          tooldata.toolstate.data.forEach(data => {
            cornerstoneTools.addToolState(element, tooldata.tooltype, data);
          });
          window.cornerstone.updateImage(element);
          // alert('loaded');
        } else {
          alert("Nothing has been saved!");
        }
      });
    });
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#dicom-list {
  width: 15%;
  height: 100%;
  background: #343534;
  overflow-y: auto;
}

#minidicom-style {
  width: 60%;
  height: 20%;
  padding-top: 10%;
}

#roi-config {
  width: 20%;
  height: 100%;
  background: #343534;
}

#list-categort-roi {
  width: 100%;
  height: 40%;
  background: #383a39;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 10%;
}

#roi-content {
  width: 100%;
  height: 40%;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 10%;
  background: #333230;
}
</style>
