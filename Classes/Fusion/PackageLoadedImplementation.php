<?php
namespace Theme\Blog\Plain\Fusion;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\ObjectManagement\ObjectManagerInterface;
use Neos\Flow\Package\PackageManager;
use Neos\Fusion\FusionObjects\AbstractFusionObject;

class PackageLoadedImplementation extends AbstractFusionObject
{

  /**
   * @Flow\Inject
   * @var PackageManager
   */
  protected $packageManager;

  /**
   * @inheritDoc
   */
  public function evaluate()
  {
    $package = $this->fusionValue('package');
    return $this->packageManager->isPackageAvailable($package);
  }
}
