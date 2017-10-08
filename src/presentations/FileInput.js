import React, { Component } from 'react'

class FileInput extends Component {

  fileInput

  componentDidMount() {

    console.log($('#file1'))

    $('#file1').fileinput({
      'theme': 'explorer-fa',
      'uploadUrl': '#',
      overwriteInitial: false,
      initialPreviewAsData: true,
      initialPreview: [
      ],
      initialPreviewConfig: [
      ],
    })
  }

  render() {
    return (
      <form encType="multipart/form-data">
        <div className="file-loading">
          <input
            id="file1"
            type="file"
            ref={node => this.fileInput = node}
            multiple
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="reset" className="btn btn-default">Reset</button>
      </form>
    )
  }
}

export default FileInput