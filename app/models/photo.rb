class Photo < ApplicationRecord
    belongs_to :album, inverse_of: :photos
    has_attached_file \
      :photo,
      styles: { thumb: ['32x32#', 'jpg'] },
      convert_options: {
        all: '-interlace Plane'
      },
      default_url: '/images/default_:style_photo.png'

  validates_attachment_presence :photo
  validates_attachment_file_name :photo, matches: [/png\Z/, /jpe?g\Z/, /gif\Z/]
end
