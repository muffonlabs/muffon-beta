import i18n from '*/plugins/i18n'
import {
  albums as formatProfileLibraryArtistAlbumsLink
} from '*/helpers/formatters/links/profile/library/artist'

export default function (
  {
    profileId,
    artistId
  }
) {
  return {
    name: i18n.global.t(
      'navigation.albums'
    ),
    link: formatProfileLibraryArtistAlbumsLink(
      {
        profileId,
        artistId
      }
    )
  }
}
